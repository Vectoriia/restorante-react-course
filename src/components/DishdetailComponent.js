import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    
class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: this.props.dishdetail
        }
    }
    renderDish(dish){
        if(dish!=null){
            return (
                <div  className="col-12 col-md-5 m-1">
                  <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
                </div>
              );
        }else{
            return(
                <div></div>
            )
        }
    }
    renderComents(comments){
        if(comments==null){
            return(
                <div></div>
            )
        }else{
            const dishComments = comments.map(comment =>{
                return(
                    <li key={comment.id}>

                        <div>{comment.comment}</div>
                        <p>-- {comment.author} , 
                        {
                            new Intl.DateTimeFormat('en-US',{
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))
                        }
                        </p>
                    </li>
                )
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className ='list-unstyled'>
                        {dishComments}
                    </ul>
                </div>
            )
        }
    }

    render() {
        const dish = this.props.dish;

        if(dish==null){
            return(
                <div></div>
            );
        }

        const item = this.renderDish(dish);
        const comment =this.renderComents(dish.comments);

        return(
            <div className='row'>
                {item}
                {comment}
            </div>
        )
    }
}

export default DishDetail;