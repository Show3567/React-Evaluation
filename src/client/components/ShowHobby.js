import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Api } from '../api/Api';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        table: {
            width: 650,
        },
    }),
);

function ShowHobby(props) {
    const classes = useStyles();

    const [hobbies, setHobbies] = useState(['Hobby']);
    const [ageCounter, setAgeCounter] = useState([]);
    const [showselect, setShowselect] = useState('');

    useEffect(() => {
        Api.getHobbies()
            .then(data => setHobbies(data))
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setShowselect(value);
        Api.ageCounter(value)
            .then(data => setAgeCounter(data));
    };

    return (
        <div>
            <h2>Age Demographic of Users with hobby</h2>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="hobby-selecter">Hobby</InputLabel>
                <Select
                    labelId="hobby-selecter"
                    id="demo-simple-select-filled"
                    value={showselect}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Hobby</em>
                    </MenuItem>
                    {hobbies.map(hobby => (
                        <MenuItem value={hobby} key={hobby}>{hobby}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Age</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ageCounter.map((counterObj) => (
                            <TableRow key={counterObj.age}>
                                <TableCell component="th" scope="row">
                                    {counterObj.age}
                                </TableCell>
                                <TableCell align="right">{counterObj.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ShowHobby;