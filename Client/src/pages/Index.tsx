import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"
import React, { useState } from "react";
import axios from 'axios'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            marginLeft: "25px",
            marginRight: "25px"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        table: {
            minWidth: 650,
        },
    }),
);

const Index = () => {
    const classes = useStyles();

    const [queryString, setQueryString] = useState("");
    const [queryResult, setQueryResult] = useState([]);

    const getTheData = async () => {
        let result = await axios.get("http://localhost:4000/api/nutrientName/rawQuery", {
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
    return <div className={classes.root}>
        <form onSubmit={onsubmit}>
            <Grid container alignItems="flex-start" justify="flex-start" direction="column" spacing={3} >
                <Grid item xs={12} >
                    <Typography>
                        Type your query below
                    </Typography>
                </Grid>
                <Grid item xs={12} style={{
                    width: "75%"
                }}>
                    <FormControl fullWidth>
                        <TextField
                            id='queryString'
                            name="queryString"
                            label='Query String'
                            value={queryString}
                            fullWidth
                            onChange={(e) => { setQueryString(e.target.value) }} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <Button fullWidth type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
        <br />
        {queryResult && queryResult.length > 0 ?
            <Grid container alignItems="flex-start" justify="flex-start" direction="column" spacing={3} >
                <Grid item xs={12} style={{
                    width: "75%"
                }}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Code</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Symbol</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                    <TableCell align="right">Tag</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {queryResult.map((row:any) => (
                                    <TableRow key={row.nutrientId}>
                                        <TableCell component="th" scope="row">
                                            {row.NutrientCode}
                                        </TableCell>
                                        <TableCell align="right">{row.NutrientName}</TableCell>
                                        <TableCell align="right">{row.NutrientSymbol}</TableCell>
                                        <TableCell align="right">{row.NutrientUnit}</TableCell>
                                        <TableCell align="right">{row.Tagname}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            : <></>}
    </div>
}
export default Index