import preldr from '../resources/ThemeResources/images/icons/preloader.gif'
import '../resources/ThemeResources/css/bootstrap.min.css';
import '../resources/ThemeResources/css/custom.css';
const SamplePage = () => {
    return ( <div>
        {/* <div className="loader">
       <div>
        <img src={preldr} />
       </div>
    </div> */}
    
    <div className="cust-theme container-fluid">
		<div className="row">
        	<div className="col-sm-5 left-wrapper">
            	<div className="event-banner-wrapper">
                	<div className="logo">
                        <h1>Stage</h1>
                    </div>
                
                	<h2>
                    Music<br/>Concert Live
                    <span>10 April 2017, 8:00 PM</span>
                    </h2>
                    
                </div>
            </div>
            <div className="col-sm-7 right-wrapper">
            	<div className="event-ticket-wrapper">
                    
                    <div className="event-tab">
                
                  
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#buyTicket" aria-controls="buyTicket" role="tab" data-toggle="tab">Buy Tickets</a></li>
                    <li role="presentation"><a href="#venue" aria-controls="venue" role="tab" data-toggle="tab">Venue</a></li>
                   
                    
                    <li role="presentation"><a href="#termCondition" aria-controls="termCondition" role="tab" data-toggle="tab">Terms & Conditions</a></li>
                  </ul>
                
                 
                  <div className="tab-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-4 mb-4">
                                <h2 className="text-success">The NFT login from you wallet has been verified</h2>
                                <p> you can now access this portal</p>
                            </div>
                        </div>

                    </div>
                    <div role="tabpanel" className="tab-pane fade in active" id="buyTicket">
                    	<div className="row">
                        	<div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="50000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">
                                        	Platinum
                                            <span>Standing<br/>
                                        	1 Ticket for 1 person</span>
                                        </div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[1]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                            </div>
                                            <p className="price">Rs.50000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="40000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Gold<span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[2]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[2]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[2]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.40000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="25000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Silver <span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[3]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[3]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[3]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.25000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="20000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Diamond<span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[4]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[4]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[4]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.20000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="18000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Ruby<span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[5]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[5]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[5]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.18000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="15000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Pearl<span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[6]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[6]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[6]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.15000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="10000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Emerald
                                        Standing<br/>
                                        1 Ticket for 1 person</div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[7]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[7]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[7]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.10000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                            <div className="col-md-6">
                            	<div className="ticketBox" data-ticket-price="5000">
                                	<div className="inactiveStatus"></div>
                                    
                                    <div className="row">
 			                       	<div className="col-xs-6">
            							<div className="ticket-name">Plaza<span>
                                        Standing<br/>
                                        1 Ticket for 1 person</span></div>
            						</div>
                                    
                                    <div className="col-xs-6">
            							<div className="ticket-price-count-box">
                                            <div className="ticket-control">
                                                <div className="input-group">
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[8]">
                                                          <span className="glyphicon glyphicon-minus"></span>
                                                      </button>
                                                  </span>
                                                  {/* <input type="text" name="quant[8]" className="form-control input-number" value="0" min="0" max="10" /> */}
                                                  <span className="input-group-btn">
                                                      <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[8]">
                                                          <span className="glyphicon glyphicon-plus"></span>
                                                      </button>
                                                  </span>
                                                </div>
                                                
                                            </div>
                                            <p className="price">Rs.5000</p>
                                        </div>
            						</div>
                                    </div>
                                	
                                    
                                    <div className="ticket-description">
                                    	<p><strong>Please refer Venue Plan:</strong><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="venue">
                    	<h4> Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod<br/> Pune 411058</h4><br/>
                        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1UMEBYRnM0KZhrhqikVv3YigwUd0" width="640" height="300"></iframe> */}
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="termCondition">
           				<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                    </div>
                  </div>
                
                </div>
                
                	<div className="cart">
                <div className="row">
                    <div className="col-xs-6">
                        <p> 
                        	<span className="ticket-count">0</span> Tickets <span className="divider"></span> Total: Rs. <span className="total-amount">0</span></p>
                    </div>
                    <div className="col-xs-6">
                    	<div className="text-right">
                        	<a className="btn disabled" data-toggle="modal" data-target="#ticket-details">PROCEED</a>
                        </div>
                    </div>
                </div>
                </div>
                       
                </div>
            </div>
        </div>
    </div>
    </div> );
}
 
export default SamplePage;