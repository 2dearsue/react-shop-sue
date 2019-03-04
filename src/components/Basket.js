import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { incrementBeginner,
          decrementBeginner,
          incrementAverage,
          decrementAverage,
          incrementAdvanced,
          decrementAdvanced } from '../redux/redux';
import { NavLink } from 'react-router-dom';

class Basket extends Component {
  render() {
    return (
        <>
          <h3 className="text-center mb-5 display-4">Cart</h3>

          <div className="container col-4">
            <table className="table table-bordered mb-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <FaPlusCircle className="mr-2"
                                  onClick={this.props.incrementBeginner}/>

                                  {this.props.counterBeginner}

                    <button className="btn bg-0 m-0 p-0"
                            onClick={this.props.decrementBeginner}>
                      <FaMinusCircle className="ml-2"/>
                    </button>
                  </th>
                  <td>Beginner Course</td>
                  <td>{this.props.costBeginner}<span>€</span></td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaPlusCircle className="mr-2"
                                  onClick={this.props.incrementAverage}/>

                                  {this.props.counterAverage}

                    <button className="btn bg-0 m-0 p-0"
                            onClick={this.props.decrementAverage}>
                      <FaMinusCircle className="ml-2"/>
                  </button>
                  </th>
                  <td>Average Course</td>
                  <td>{this.props.costAverage}<span>€</span></td>
                </tr>
                <tr>
                  <th scope="row">
                    <FaPlusCircle className="mr-2"
                                  onClick={this.props.incrementAdvanced}/>

                                  {this.props.counterAdvanced}

                    <button className="btn bg-0 m-0 p-0"
                            onClick={this.props.decrementAdvanced}>
                      <FaMinusCircle className="ml-2"/>
                    </button>
                  </th>
                  <td>Advanced Course</td>
                  <td>{this.props.costAdvanced}<span>€</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="list-group-item mt-3 bg-info text-white text-center">You have a total of <span>{this.props.totalCost}</span><span> €</span></h3>

          <div className="text-center mt-5">
            <NavLink to="/logout" className="btn btn-light border border-info">Submit Order
            </NavLink>
          </div>
        </>
    );
  }
}

const mapStateToProps = state => {
  return {
    counterBeginner: state.counterBeginner,
    counterAverage: state.counterAverage,
    counterAdvanced: state.counterAdvanced,
    totalCost: state.totalCost,
    costBeginner: state.costBeginner,
    costAverage: state.costAverage,
    costAdvanced: state.costAdvanced,
  }
}

const mapDispatchToProps = dispatch => {
     return {
       incrementBeginner: () => dispatch(incrementBeginner()),
       decrementBeginner: () => dispatch(decrementBeginner()),
       incrementAverage: () => dispatch(incrementAverage()),
       decrementAverage: () => dispatch(decrementAverage()),
       incrementAdvanced: () => dispatch(incrementAdvanced()),
       decrementAdvanced: () => dispatch(decrementAdvanced()),
     }
   }

 export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

// const mapDispatchToProps = dispatch => {
//      return {
//        incrementAverage: () => dispatch(incrementAverage())
//      }
//    }
//
//  export const AverageContainer = connect(null, mapDispatchToProps)(Average)
