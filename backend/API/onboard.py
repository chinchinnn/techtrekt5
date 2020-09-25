from flask import Flask, request
import random, re, requests

app = Flask(__name__)
app.debug = True

@app.before_request
def authenticate():
    # return 
    ####### commented out for now
    # if 'Authorization' in request.headers:
    if True:
        url = "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login"
        data = {
            "username": "cellinntng",
	        "password": "a4d77eac59d8f7db"
        }
        authorized = requests.post(url, data=data)
        if authorized.status_code != 200:
            return {
                "status": 403,
                "error": "Forbidden Invalid JWT or Expired JWT"
            }, 403
    else:
        return {
            "status": 401,
            "error": "Unauthorized - Missing JWT"
        }, 401

def valid_cust_name(name):
    return len(name) > 0 and len(name) <= 64 and name.isalpha()

def valid_cust_age(age):
    if isinstance(age, int):
        if not age > 18:
            return False
    else:
        return False
    return True

def valid_dob(dob):
    return isinstance(dob, str) and bool(re.match("^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\\d\\d$", dob))

def valid_serv_name(servName):
    return isinstance(servName, str)

def valid_branch_code(branchCode):
    return isinstance(branchCode, int)

def valid_NRIC(nric):
    return isinstance(nric, str) and bool(re.match("^[A-Z][0-9]{7}[A-Z]$", nric))

def valid_product_type(pdt_arr):
    products = ["137","070","291","969","555"]
    if isinstance(pdt_arr, list):
        for item in pdt_arr:
            if item not in products:
                return False
    return True

@app.route('/validateForm', methods=['POST'])
def validate_data():
    errors = []

    #Check for JSON data
    if request.json:
        data = request.json
        #1. check customer name maxlen(64) a-zA-Z
        if not valid_cust_name(data["customerName"]):
            errors.append("Invalid Customer Name")
            
        #2. check customer age is int > 18
        if not valid_cust_age(data["customerAge"]):
            errors.append("Invalid Customer Age")

        #3. check DOB is DD/MM/YYYY
        if not valid_dob(data["customerDOB"]):
            errors.append("Invalid DOB")

        #4. check serviceOfficerName is str
        if not valid_serv_name(data["serviceOfficerName"]):
            errors.append("Invalid Service Officer Name")

        #5. check NRIC is all caps [A-Z][0-9]{7}[A-Z]
        if not valid_NRIC(data["NRIC"]):
            errors.append("Invalid NRIC")

        #6. check branchCode is int
        if not valid_branch_code(data["branchCode"]):
            errors.append("Invalid Branch Code")

        #7. check image filesize < 2MB

    else: #if no JSON data, return error 400
        return {"error": "No JSON data"}, 400
    
    if len(errors) > 0:
        return {
            "status": 500,
            "error": errors
        }, 500
    
    return {"customerCode": random.randint(0,200)}, 200

if __name__ == '__main__':
    app.run(port=5000)