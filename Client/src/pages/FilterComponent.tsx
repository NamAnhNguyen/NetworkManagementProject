import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select } from "@material-ui/core"
import { useState } from "react";

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

const FilterComponent = (props: { table: string }) => {

    const classes = useStyles();
    const { table } = props

    const [variableType, setVariableType] = useState('number')
    const [filterValue, setFilterValue] = useState<number | string>('')

    const [field, setField] = useState<string>('')
    const [operator, setOperator] = useState('=')

    const variableTypes = ['number', 'string']
    const numberOperators = ['=', '!=', '<', '<=', '>', '>=']
    const stringOperators = ['=', 'contains', 'does not contain', 'begins with', 'do not begin with', 'ends with', 'do not end with']

    const orderFields: { name: string, type: 'number' | 'string' }[] = [
        { name: 'ord_num', type: 'number' },
        { name: 'ord_amount', type: 'number' },
        { name: 'advance_amount', type: 'number' },
        { name: 'cust_code', type: 'string' },
        { name: 'agent_code', type: 'string' },
    ]

    const customerFields: { name: string, type: 'number' | 'string' }[] = [
        { name: 'cust_code', type: 'string' },
        { name: 'cust_name', type: 'string' },
        { name: 'cust_city', type: 'string' },
        { name: 'working_area', type: 'string' },
        { name: 'cust_country', type: 'string' },
        { name: 'grade', type: 'number' },
        { name: 'opening_amt', type: 'number' },
        { name: 'receive_amt', type: 'number' },
        { name: 'payment_amt', type: 'number' },
        { name: 'outstanding_amt', type: 'number' },
        { name: 'phone_no', type: 'string' },
        { name: 'agent_code', type: 'string' },
    ]

    const agentFields: { name: string, type: 'number' | 'string' }[] = [
        { name: 'agent_code', type: 'string' },
        { name: 'agent_name', type: 'string' },
        { name: 'working_area', type: 'string' },
        { name: 'commission', type: 'number' },
        { name: 'phone_no', type: 'string' },
        { name: 'country', type: 'string' },
    ]

    const renderFieldSelect = () => {
        switch (table) {
            case 'orders':
                return <Select
                    native
                    value={field}
                    fullWidth
                    onChange={(e) => { setField(`${e.target.value}`) }}
                >
                    {orderFields.map(field => (
                        <option value={field.name}>{field.name.toUpperCase()}</option>
                    ))}
                </Select>
            case 'customers':
                return <Select
                    native
                    value={field}
                    fullWidth
                    onChange={(e) => { setField(`${e.target.value}`) }}
                >
                    {customerFields.map(field => (
                        <option value={field.name}>{field.name.toUpperCase()}</option>
                    ))}
                </Select>
            case 'agents':
                return <Select
                    native
                    value={field}
                    fullWidth
                    onChange={(e) => { setField(`${e.target.value}`) }}
                >
                    {agentFields.map(field => (
                        <option value={field.name}>{field.name.toUpperCase()}</option>
                    ))}
                </Select>
            default:
                return <></>;
        }
    }

    const renderOperatorSelect = () => {
        switch (variableType) {
            case 'number':
                return <Select
                    native
                    value={operator}
                    fullWidth
                    onChange={(e) => { setOperator(`${e.target.value}`) }}
                >
                    {numberOperators.map(op => (
                        <option value={op}>{op.toUpperCase()}</option>
                    ))}
                </Select>
            case 'string':
                return <Select
                    native
                    value={operator}
                    fullWidth
                    onChange={(e) => { setOperator(`${e.target.value}`) }}
                >
                    {stringOperators.map(op => (
                        <option value={op} >{op}</option>
                    ))}
                </Select>
            default:
                return <></>;
        }
    }

    const renderFilterValue = () => {
        switch (variableType) {
            case 'number':
                return <TextField
                    id='filterValue'
                    name="filterValue"
                    label='Filter Value'
                    value={filterValue}
                    type='number'
                    fullWidth
                    onChange={(e) => { setFilterValue(e.target.value) }} />
            case 'string':
                return <TextField
                    id='filterValue'
                    name="filterValue"
                    label='Filter Value'
                    value={filterValue}
                    type='number'
                    fullWidth
                    onChange={(e) => { setFilterValue(e.target.value) }} />
            default:
                return <></>;
        }
    }

    return <div className={classes.root}>
        <Grid container spacing={3} >
            <Grid item xs={2}>
                <Select
                    native
                    value={variableType}
                    fullWidth
                    onChange={(e) => { setVariableType(`${e.target.value}`) }}
                >
                    {variableTypes.map(type => (
                        <option value={type}>{type.toUpperCase()}</option>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={4}>
                {renderFieldSelect()}
            </Grid>
            <Grid item xs={1}>
                {renderOperatorSelect()}
            </Grid>
            <Grid item xs={5}>
                {renderFilterValue()}
            </Grid>
        </Grid>
    </div>
}
export default FilterComponent