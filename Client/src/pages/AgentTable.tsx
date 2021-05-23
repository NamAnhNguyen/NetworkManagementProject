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

const AgentTable = (props: { data: any[] }) => {

    const classes = useStyles();
    const { data } = props
    return <div className={classes.root}>
        {data && data.length > 0 ?
            <Grid container alignItems="flex-start" justify="flex-start" spacing={3} >
                <Grid item xs={12} >
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Code</TableCell>
                                    <TableCell >Name</TableCell>
                                    <TableCell >Working Area</TableCell>
                                    <TableCell >Commission</TableCell>
                                    <TableCell >Phone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <TableRow key={row.agent_code}>
                                        <TableCell component="th" scope="row">
                                            {row.agent_code}
                                        </TableCell>
                                        <TableCell >{row.agent_name}</TableCell>
                                        <TableCell >{row.working_area}</TableCell>
                                        <TableCell >{row.commission}</TableCell>
                                        <TableCell >{row.phone_no}</TableCell>
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
export default AgentTable