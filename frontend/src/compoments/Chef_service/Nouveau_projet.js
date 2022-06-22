import React , {Component} from "react";
import {form} from 'react-bootstrap'
import './Style.css'

class Nouveau_projet extends Component{
    render() {
        return(
            <div className="row">
                <div className="col-6 image"  >

                </div>
                <div className="col-6">
                    <form>
                        <fieldset>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                    else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1" className="form-label mt-4">Example select</label>
                                <select className="form-select" id="exampleSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect2" className="form-label mt-4">Example multiple select</label>
                                <select multiple="" className="form-select" id="exampleSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea" className="form-label mt-4">Example textarea</label>
                                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                            <br/>

                            <button type="submit" className="btn btn-primary">Submit</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        );

    }

    }

export default Nouveau_projet;