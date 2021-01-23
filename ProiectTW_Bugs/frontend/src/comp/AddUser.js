import React, {Component} from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Grid, TextField, Button } from '@material-ui/core'
import { post, get, put } from '../Calls';
import {UtilizatoriRoute} from '../ApiRoutes';

export default class AddUser extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Utilizatori: {
                UserName: "",
                AdresaEmail: "",
                TipUser:"",
                
            }
        };

        this.onChangeUtilizatori = this.onChangeUtilizatori.bind(this)
        this.saveUtilizatori = this.saveUtilizatori.bind(this)
    }

    onChangeUtilizatori(e){
        let newUtilizatori = this.state.Utilizatori;        
        newUtilizatori[e.target.name] = e.target.value;
        this.setState({Utilizatori: newUtilizatori});
    }

    async saveUtilizatori(){
        let id = this.props.match.params.id;

        if (!id){
            let res = await post(UtilizatoriRoute, this.state.Utilizatori);
            if (res.hasErrors){
                alert(res.message)
                return;
            }

            this.props.history.push("/");
        }else{
            let res = await put(UtilizatoriRoute, id, this.state.Utilizatori);
            if (res.hasErrors){
                alert(res.message)
                return;
            }

            this.props.history.push("/");
        }
    }

    async componentDidMount(){
        let id = this.props.match.params.id;
        if (!id)
            return;

        let elem = await get(UtilizatoriRoute, id);
        if (elem.hasErrors){
            alert(elem.message)
            return;
        }

        this.setState({Utilizatori: elem});
    }

    render() {
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={8} sm={8}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="UserID"
                            name="UserID"
                            label="UserID"
                            fullWidth
                            value={this.state.Utilizatori.UtilizatoriName}
                            onChange={e => this.onChangeUtilizatori(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="UserName"
                            name="UserName"
                            label="UserName"
                            fullWidth
                            value={this.state.Utilizatori.UserID}
                            onChange={e => this.onChangeUtilizatori(e)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="AdresaEmail"
                            name="AdresaEmail"
                            label="AdresaEmail"
                            fullWidth
                            value={this.state.Utilizatori.UserID}
                            onChange={e => this.onChangeUtilizatori(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="TipUser"
                            name="TipUser"
                            label="TipUser"
                            fullWidth
                            value={this.state.Utilizatori.UserID}
                            onChange={e => this.onChangeUtilizatori(e)}
                        />
                    </Grid>
                </Grid>

                <Button color="primary" variant="outlined" startIcon={<CancelIcon />} onClick={
                    (() => { this.props.history.push("/") })
                }>
                    Cancel
                </Button>
                <Button onClick={this.saveMagazin} color="primary" variant="outlined" startIcon={<SaveIcon />}>
                    Save
                </Button>
            </div>
        )

    }
}