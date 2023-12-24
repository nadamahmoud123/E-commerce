import React from "react";

const Contact = () => {
  return <div>

<form className="form">
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        
                        required
                      />
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                       
                        required
                      />
                    </div>

                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your message"
                       
                        required
                      />
                    </div>

                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form>
              
  </div>;
};

export default Contact;
