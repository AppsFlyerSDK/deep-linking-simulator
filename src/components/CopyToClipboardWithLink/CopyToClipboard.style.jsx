import { makeStyles } from '@material-ui/core/styles';

export const defaultStyles = theme => ({
    inputAdornment: {
        height: props => props.multiline && 'fit-content',
        alignSelf: props => props.multiline && 'flex-end'
    },
    IconButtonRoot: {
        width: '28px',
        height: '28px',
        borderRadius: theme.shape.borderRadius,
        '& .MuiSvgIcon-root': {
            width: '16px',
            height: '16px'
        },
        '&.MuiIconButton-sizeSmall': {
            width: '30px',
            height: '30px'
        },
        '&:hover:not([disabled])': {
            borderColor: theme.palette.action.hover
        }
    },
    tooltipPlacementBottom: {
        marginTop: theme.spacing(1)
    }
});

export const useStyles = makeStyles(defaultStyles, {
    name: 'AFCopyToClipboard'
});
