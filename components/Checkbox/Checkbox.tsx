import styles from '../../styles/Checkbox.module.css'


export interface CheckboxProps{
    id?: number,
    title: string,
    name: string,
    handleChange?: (() => {}) | any,
    checked?: boolean
}

export default function Checkbox (props : CheckboxProps){


        return (
            <div className={styles.item}>
                <input
                    type="checkbox"
                    name={props.name}
                    onChange={props.handleChange}
                    defaultChecked={props.checked ?? false}
                />
                <span></span>
                <label htmlFor={props.name}>{props.title}</label>
            </div>
        );

}
