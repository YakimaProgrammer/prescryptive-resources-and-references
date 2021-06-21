import { Component } from "react";
import style from "./FilterBar.module.css";

class FilterBarComponent extends Component {
    render() {
        return (
            <div className={style.asTable}>
                <div>
                    <div 
                        onClick={
                            this.props.setNewFilter.bind(
                                this, 
                                "All"
                            )
                        }
                        className={
                            style.filterItem + " " +
                            (
                                this.props.currentFilter === "All" ?
                                style.currentFilter : style.inactive
                            )
                        }
                    >View All</div>
                    
                    <div 
                        onClick={
                            this.props.setNewFilter.bind(
                                this, 
                                "Training"
                            )
                        }
                        className={
                            style.filterItem + " " +
                            (
                                this.props.currentFilter === "Training" ?
                                style.currentFilter : style.inactive
                            )
                        }
                    >Training</div>
                    
                    <div 
                        onClick={
                            this.props.setNewFilter.bind(
                                this, 
                                "Billing Instructions"
                            )
                        }
                        className={
                            style.filterItem + " " +
                            (
                                this.props.currentFilter === 
                                    "Billing Instructions" ?
                                style.currentFilter : style.inactive
                            )
                        }
                    >Billing Instructions</div>
                    
                    <div 
                        onClick={
                            this.props.setNewFilter.bind(
                                this, 
                                "Marketing Materials"
                            )
                        }
                        className={
                            style.filterItem + " " +
                            (
                                this.props.currentFilter === 
                                    "Marketing Materials" ?
                                style.currentFilter : style.inactive
                            )
                        }
                    >Marketing Materials</div>
                </div>
            </div>
        );
    }
}

export { FilterBarComponent };