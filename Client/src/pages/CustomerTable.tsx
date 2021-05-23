import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select } from "@material-ui/core"

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

const CustomerTable = (props: { data: any[] }) => {

    const classes = useStyles();
    const { data } = props
    return <div className={classes.root}>
        {data && data.length > 0 ?
            <Grid container alignItems="flex-start" justify="flex-start" spacing={3} >
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Code</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>Working Area</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell align="right">Grade</TableCell>
                                    <TableCell align="right">Opening AMT</TableCell>
                                    <TableCell align="right">Receive AMT</TableCell>
                                    <TableCell align="right">Payment AMT</TableCell>
                                    <TableCell align="right">Outstanding AMT</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Agent Code</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <TableRow key={row.cust_code}>
                                        <TableCell component="th" scope="row">
                                            {row.cust_code}
                                        </TableCell>
                                        <TableCell>{row.cust_name}</TableCell>
                                        <TableCell>{row.cust_city}</TableCell>
                                        <TableCell>{row.working_area}</TableCell>
                                        <TableCell>{row.cust_country}</TableCell>
                                        <TableCell align="right">{row.grade}</TableCell>
                                        <TableCell align="right">{row.opening_amt}</TableCell>
                                        <TableCell align="right">{row.receive_amt}</TableCell>
                                        <TableCell align="right">{row.payment_amt}</TableCell>
                                        <TableCell align="right">{row.outstanding_amt}</TableCell>
                                        <TableCell>{row.phone_no}</TableCell>
                                        <TableCell>{row.agent_code}</TableCell>
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
export default CustomerTable