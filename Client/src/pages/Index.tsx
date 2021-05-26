import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select } from "@material-ui/core"
import React, { useState } from "react";
import axios from 'axios'
import AgentTable from "./AgentTable";
import CustomerTable from "./CustomerTable";
import OrderTable from "./OrderTable";
import FilterComponent from "./FilterComponent";
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginLeft: "25px",
            marginRight: "25px"
        },
    }),
);
interface QueryComponent {
    field: string,
    operator: string,
    value: string | number
}

const Index = () => {
    const classes = useStyles();

    const availableTables = ['orders', 'customers', 'agents']

    const [queryString, setQueryString] = useState("");
    const [queryResult, setQueryResult] = useState([]);
    const [chosenTable, setChosenTable] = useState('agents')
    const [isSecure, setIsSecure] = useState(false)
    const [queryComponent, setQueryComponent] = useState<QueryComponent>(
        { field: "", operator: "=", value: "" }
    );

    const [showAlert, setShowAlert] = useState(false)


    const getTheData = async () => {
        let result = await axios.get("http://localhost:4000/api/rawQuery", {
            params: {
                queryString: queryString
            }
        })
        setQueryResult(result.data.data)
    }

    const getChildrenValue = (
        queryComponent: QueryComponent) => {
        setQueryComponent(queryComponent)
        // console.log(queryComponent.field, queryComponent.operator, queryComponent.value)
    }

    const submitNoSecure = async () => {
        console.log(queryString)
        if (!queryString) {
            setShowAlert(true)
            return
        }
        await getTheData()
    }

    const submitSecure = async () => {
        let { field, operator, value } = queryComponent
        if (!field || !operator || !value) {
            setShowAlert(true)
            return
        }
        console.log(queryComponent)
        setShowAlert(false)

    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (!isSecure) {
            await submitNoSecure()
        }
        else {
            await submitSecure()
        }

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
        <form onSubmit={onSubmit}>
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
                        onChange={(e) => {
                            setIsSecure(e.target.checked)
                            setQueryString("")
                            setQueryResult([]);
                        }}
                        name="checkedB"
                        color="primary"
                    />
                </Grid>
                <Grid item xs={2} >
                    <Typography>Type your query below</Typography>
                </Grid>
                <Grid item xs={10} >
                    {isSecure ?

                        <Grid container>
                            <Grid item xs={10}>
                                <FilterComponent table={chosenTable} callback={getChildrenValue} />
                            </Grid>
                            <Grid item xs={2}>
                                <Button>Add Filter</Button>
                            </Grid>
                        </Grid>
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
                <Grid item xs={12}>
                    {showAlert ? <Alert variant="outlined" severity="error" onClose={() => {
                        setShowAlert(false)
                    }}>
                        Missing Params
                    </Alert> : <></>}
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