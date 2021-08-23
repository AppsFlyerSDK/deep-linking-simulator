import React, { useRef, useState } from "react"
import copy from "copy-to-clipboard"
import PropTypes from "prop-types"
import InputAdornment from "@material-ui/core/InputAdornment"
import CopyIcon from "./CopyIcon"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"

import { useStyles as defaultStyles } from "./CopyToClipboard.style"

const CopyToClipboardWithLink = ({
  id,
  value = "",
  size,
  beforeCopyText,
  afterCopyText,
  multiline = false,
  useStyles = defaultStyles,
  onCopy,
  link,
  ...rest
}) => {
  const classes = useStyles({ multiline })

  const inputEl = useRef(null)
  const [tooltipContent, setTooltipContent] = useState(beforeCopyText)

  const copyText = () => {
    copy(value)
    inputEl.current?.blur()
  }

  const handleClick = () => {
    copyText();
    setTooltipContent(afterCopyText);
    onCopy && onCopy();
  }

  const onTooltipTransitionExited = () => {
    setTooltipContent(beforeCopyText)
  }

  return (
    <TextField
      value={value}
      ref={inputEl}
      id={id}
      variant="outlined"
      type="text"
      size={size}
      multiline={multiline}
      fullWidth={multiline}
      InputProps={{
        readOnly: true,
        endAdornment: (
          <InputAdornment
            classes={{
              root: classes.inputAdornment,
            }}
            onClick={handleClick}
            position="end"
          >
            <Tooltip
              title={tooltipContent}
              placement="bottom"
              TransitionProps={{
                onExited: onTooltipTransitionExited,
              }}
              classes={{
                tooltipPlacementBottom: classes.tooltipPlacementBottom,
              }}
            >
              <IconButton
                classes={{
                  root: classes.IconButtonRoot,
                }}
                color="primary"
              >
                <CopyIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
        inputComponent: link,
      }}
      {...rest}
    />
  )
}

CopyToClipboardWithLink.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  size: PropTypes.oneOf(["m", "l", "fullWidth"]),
  beforeCopyText: PropTypes.string,
  afterCopyText: PropTypes.string,
  useStyles: PropTypes.func,
  multiline: PropTypes.bool,
  onCopy: PropTypes.func
}

CopyToClipboardWithLink.defaultProps = {
  beforeCopyText: "Copy",
  afterCopyText: "Copied",
}

export default CopyToClipboardWithLink
