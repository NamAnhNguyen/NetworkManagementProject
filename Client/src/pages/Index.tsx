import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select } from "@material-ui/core"
import React, { useState } from "react";
import axios from 'axios'
import AgentTable from "./AgentTable";
import CustomerTable from "./CustomerTable";
import OrderTable from "./OrderTable";
import FilterComponent from "./FilterComponent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginLeft: "25px",
            marginRight: "25px"
        },
    }),
);

const Index = () => {
    const classes = useStyles();

    const availableTables = ['orders', 'customers', 'agents']

    const [queryString, setQueryString] = useState("");
    const [queryResult, setQueryResult] = useState([]);
    const [chosenTable, setChosenTable] = useState('agents')
    const [isSecure, setIsSecure] = useState(false)

    const getTheData = async () => {
        let result = await axios.get("http://localhost:4000/api/rawQuery", {
            params: {
                queryString: queryString
            }
        })
        setQueryResult(result.data.data)
    }

    const onsubmit = async (event: any) => {
        event.preventDefault();
        console.log(queryString)
        await getTheData()
    }

    const renderTable = () => {
        switch (chosenTable) {
            case 'agents':
                return <AgentTable data={queryResult} />
            case 'customers':
                return <CustomerTable data={queryResult} />
            case 'orders':
                return <OrderTable data={queryResult} />
            default:
                return <></>;
        }
    }

    return <div className={classes.root}>
        <form onSubmit={onsubmit}>
            <Grid container alignItems="flex-start" justify="flex-start" spacing={3} >
                <Grid item xs={2} >
                    <Typography>Choose your table below</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Select
                        native
                        value={chosenTable}
                        fullWidth
                        onChange={(e) => { setChosenTable(`${e.target.value}`) }}
                    >
                        {availableTables.map(table => (
                            <option value={table}>{table.toUpperCase()}</option>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={1} >
                    <Typography>Is secure?</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Switch
                        checked={isSecure}
                        onChange={(e) => { setIsSecure(e.target.checked) }}
                        name="checkedB"
                        color="primary"
                    />
                </Grid>
                <Grid item xs={2} >
                    <Typography>Type your query below</Typography>
                </Grid>
                <Grid item xs={10} >
                    {isSecure ?
                        <FilterComponent table={chosenTable} />
                        :
                        <FormControl fullWidth>
                            <TextField
                                id='queryString'
                                name="queryString"
                                label='Query String'
                                value={queryString}
                                fullWidth
                                onChange={(e) => { setQueryString(e.target.value) }} />
                        </FormControl>
                    }
                </Grid>
                <Grid item xs={12} >
                    <Button fullWidth type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
        <br />
        {
            renderTable()
        }
    </div>
}
export default Index