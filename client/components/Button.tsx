import * as React from 'react'

export enum Types {
    button = 'button',
    reset = 'reset',
    submit = 'submit'
}

export enum Kinds {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    warning = 'warning',
    danger = 'danger'
}

interface Props {
    type?: Types
    kind?: Kinds
    children?: React.ReactNode
    classNames?: string
}

const Button: React.FC = ({
    type = Types.button,
    kind = Kinds.primary,
    children,
    classNames = ''
}: Props): React.ReactElement => (
    <button type={type} className={`btn btn-${kind} ${classNames}`}>
        {children}
    </button>
)

export default Button
