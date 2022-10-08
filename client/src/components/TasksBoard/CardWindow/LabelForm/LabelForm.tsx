import React from 'react'
import styles from './styles.module.scss'
import { HexColorPicker } from "react-colorful";
import { presetColors } from 'assets/localData'
import TextareaAutosize from 'react-textarea-autosize';
import Button from 'components/common/Button/Button'

interface LabelProps {
  formId: string
  value: string
  selectColor: string
  handleSubmitForm: (value: any) => void
  handleChangeTitle: (value: any) => void
  onFocus?: (value: any) => void
  handleDeleteLabel: () => void
  setSelectColor: (value: any) => void
}

const LabelForm: React.FC<LabelProps> = ({
  formId,
  selectColor,
  value,
  handleChangeTitle,
  handleSubmitForm,
  handleDeleteLabel,
  onFocus,
  setSelectColor,
}) => {

  const placeholder = 'Dodaj nazwę etykiety...'
  console.log(selectColor)
  return (
    <form className={styles.labelForm}>
      <p style={{ marginBottom: '5px' }}>Nazwa</p>
      <TextareaAutosize
        id={formId}
        maxRows={20}
        placeholder={placeholder}
        value={value}
        className={styles.textarea}
        autoFocus
        onChange={handleChangeTitle}
        onFocus={onFocus}
      />
      <p style={{ marginBottom: '5px' }}>Wybierz kolor</p>
      <div className={styles.picker}>
        <HexColorPicker
          className={styles.colorsPalette}
          color={selectColor}
          onChange={setSelectColor}
        />
        <div className={styles.pickerSwatches}>
          {presetColors.slice(0, 14).map((presetColor) => (
            <div
              key={presetColor}
              className={styles.pickerSwatch}
              style={{ background: presetColor }}
              onClick={setSelectColor}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <Button onClick={handleSubmitForm} title={'Zapisz'} type={'submit'} style={{ marginRight: '16px' }} />
        <Button onClick={handleDeleteLabel} title={'Usuń'} type={'reset'} />
      </div>
    </form>
  )
}

export default LabelForm