import React from "react";
import { Button } from "react-bootstrap";
import ModalOpem from "./modal";

interface Props{
    handleOpenModalConfirm:any;
    showModal:boolean;
    handleOpenModal:any;
}
interface State{

}
export default class Click extends React.Component<Props,State> {
    render(){
        return(
            <>
              <Button variant="primary" onClick={this.props.handleOpenModal}> Click</Button>
              <ModalOpem {...this.props}/>
            </>
        );
    }
}