import React from 'react'

const colorForStatus = (WrappedComponent) => {

    const colours = [ 'red ', 'blue' ,'green' ]
    const className = colours[0] +'-text';

    return (props) => {
        return (
            <div className = {className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default colorForStatus;