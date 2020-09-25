from flask import Flask, request
import random

app = Flask(__name__)
app.debug = True

# @app.before_request
def authenticate():
    return 
    ####### commented out for now
    # if 'Authorization' in request.headers:
    #     authorized = True #placeholder
    #     if not authorized:
    #         return {
    #                     "status": 403,
    #                     "error": "Forbidden Invalid JWT or Expired JWT"
    #                 }, 403
    # else:
    #     return {
    #                 "status": 401,
    #                 "error": "Unauthorized - Missing JWT"
    #             }, 401
    #<Insert call to authentication API>

def valid_cust_name(name):
    return len(name) <= 64 and name.isalpha()

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

        #3. check DOB is DD/MM/YYYY

        #4. check serviceOfficerName is str

        #5. check NRIC is all caps [A-Z][0-9]{7}[A-Z]

        #6. check branchCode is int

        #7. check image filesize < 2MB

    else: #if no JSON data, return error 400
        return {"error": "No JSON data"}, 400
    return {"customerCode": random.randint(0,200)}, 200

if __name__ == '__main__':
    app.run(port=5000)