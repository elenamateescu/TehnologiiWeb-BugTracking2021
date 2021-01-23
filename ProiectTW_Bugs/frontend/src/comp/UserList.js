import React, {Component} from 'react';
import {get, remove} from '../Calls';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, IconButton } from '@material-ui/core'

export default class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
            rows: []
        };

        this.deleteUser = this.deleteUser.bind(this);
    }

    async componentDidMount(){
        let data = await get(UtilizatoriRoute);
        if (data.hasErrors){
            alert(data.message)
            return;
        }
        this.setState({rows: data});
    }

    async deleteUser(id, index){
        let res = await remove(UtilizatoriRoute, id);

        if (res.hasErrors){
            alert(res.message);
            return;
        }

        let users = this.state.rows;
        users.splice(index, 1);
        this.setState({rows: users});
    }

    render() {
        return (
          <div>
    
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => {
                  this.props.history.push("/AddUser")
                }}
              >
                Add new User
              </Button>
            </div>
            <br />
    
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>UserID</TableCell>
                    <TableCell align="right">User Name</TableCell>
                    <TableCell align="right">Email Address</TableCell>
                    <TableCell align="right">User Type</TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row, index) => (
                    <TableRow key={row.UserID}>
                      <TableCell component="th" scope="row">
                        {row.MagazinId}
                      </TableCell>
                      <TableCell align="right">{row.UserName}</TableCell>
                      <TableCell align="right">{row.AdresaEmail}</TableCell>
                      <TableCell align="right">{row.TipUser}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <EditIcon color="primary" onClick ={ (() => {this.props.history.push(`/AddUser/${row.UserID}`)})} />
                        </IconButton>
                        <IconButton onClick={() => this.deleteUser(row.UserID, index)}>
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )
      }
}