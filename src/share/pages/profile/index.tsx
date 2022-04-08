import React, { Fragment } from 'react';
import NAvbar from '../../components/navbar';
import './profile.css';

function Profile() {
  return (
    <Fragment>
      <NAvbar  toggleSidebar={()=>{}} />
      <div className="container padding-bottom-3x mb-2 mt-3">
        <div className="row">
            <div className="col-lg-4">
                <aside className="user-info-wrapper">
                    <div className="user-cover" style={{backgroundImage:"url(https://bootdey.com/img/Content/bg1.jpg);"}}>
                        <div className="info-label" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward Points to spend"><i className="icon-medal"></i>290 points</div>
                    </div>
                    <div className="user-info">
                        <div className="user-avatar">
                            <a className="edit-avatar" href="#"></a><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User " /></div>
                        <div className="user-data">
                            <h4>Daniel Adams</h4><span>Joined February 06, 2017</span>
                        </div>
                    </div>
                </aside>
                <nav className="list-group">
                    <a className="list-group-item with-badge" href="#"><i className=" fa fa-th"></i>Orders<span className="badge badge-primary badge-pill">6</span></a>
                    <a className="list-group-item" href="#"><i className="fa fa-user"></i>Profile</a>
                    <a className="list-group-item" href="#"><i className="fa fa-map"></i>Addresses</a>
                    <a className="list-group-item with-badge active" href="#"><i className="fa fa-heart"></i>Wishlist<span className="badge badge-primary badge-pill">3</span></a>
                    <a className="list-group-item with-badge" href="#"><i className="fa fa-tag"></i>My Tickets<span className="badge badge-primary badge-pill">4</span></a>
                </nav>
            </div>
            <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                <div className="table-responsive wishlist-table margin-bottom-none">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#">Clear Wishlist</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/FF0000/000000" alt="Product" /></a>
                                        <div className="product-info">
                                            <h4 className="product-title"><a href="#">Unionbay Park</a></h4>
                                            <div className="text-lg text-medium text-muted">$43.90</div>
                                            <div>Availability:
                                                <div className="d-inline text-success">In Stock</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i className="icon-cross"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/87CEFA/000000" alt="Product" /></a>
                                        <div className="product-info">
                                            <h4 className="product-title"><a href="#">Daily Fabric Cap</a></h4>
                                            <div className="text-lg text-medium text-muted">$24.70</div>
                                            <div>Availability:
                                                <div className="d-inline text-warning">2 - 3 Weeks</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i className="icon-cross"></i></a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/483D8B/000000" alt="Product" /></a>
                                        <div className="product-info">
                                            <h4 className="product-title"><a href="#">Cole Haan Crossbody</a></h4>
                                            <div className="text-lg text-medium text-muted">$200.00</div>
                                            <div>Availability:
                                                <div className="d-inline text-success">In Stock</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i className="icon-cross"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="inform_me"  />
                    <label className="custom-control-label" htmlFor="inform_me">Inform me when item from my wishlist is available</label>
                </div>
            </div>
        </div>
    </div>
    </Fragment>

  )
}

export default Profile;