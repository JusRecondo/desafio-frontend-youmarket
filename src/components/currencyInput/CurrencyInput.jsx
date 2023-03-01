import styles from './CurrencyInput.module.scss';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

//https://github.com/text-mask/text-mask/tree/master/react#readme

const maskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
};

const CurrencyInput = ({ value, handleChange }) => {
    const currencyMask = createNumberMask({
        ...maskOptions,
    });

    return (
        <MaskedInput
            mask={currencyMask}
            value={value}
            onChange={handleChange}
            className={styles.currencyInput}
            inputMode="numeric"
        />
    );
};

export default CurrencyInput;
