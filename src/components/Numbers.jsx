import React from 'react'
import Button from './Button/index'
import PropTypes from 'prop-types'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumbers => {
    return numbers.map(number => <Button key={number} text={number.toString()} clickHandler={onClickNumbers} />)
}

const Numbers = ({onClickNumbers}) => (
    <section className="numbers">
        {renderButtons(onClickNumbers)}
    </section>
)

Numbers.propTypes = {
    onClickNumbers: PropTypes.func.isRequired
}

export default Numbers