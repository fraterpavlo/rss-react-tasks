// import React, { useRef, useState } from 'react';
// import MyLabel from './UI/myLabel';
// import MyInput from './UI/myInput';
// import MyButton from 'components/UI/myButton';
// import { CreateCardFormProps } from '../interfaces/components/createCardForm';
// import MySelect from './UI/mySelect';
// import classes from 'styles/components/create-card-form.module.css';

// const CreateCardForm = ({ create }: CreateCardFormProps) => {
//   const submitBtnRef = useRef<HTMLButtonElement | null>(null);
//   const carBrandInputRef = useRef<HTMLInputElement | null>(null);
//   const carModelInputRef = useRef<HTMLInputElement | null>(null);
//   const carTypeSelectRef = useRef<HTMLSelectElement | null>(null);
//   // const carColorFormRef = useRef<HTMLSelectElement | null>(null);
//   const carBuildCountrySelectRef = useRef<HTMLSelectElement | null>(null);
//   const carBuildDateInputRef = useRef<HTMLInputElement | null>(null);
//   const carPriceInputRef = useRef<HTMLInputElement | null>(null);
//   const carIsElectricInputRef = useRef<HTMLInputElement | null>(null);
//   const carFileInputRef = useRef<HTMLInputElement | null>(null);
//   const [messages, setMessages] = useState({
//     carBrandInputMessage: '',
//     carModelInputMessage: '',
//     carBuildDateInputMessage: '',
//     carPriceInputMessage: '',
//     carFileInputMessage: '',
//   });

//   function checkIsValidFormValues() {
//     const CarBrandInputValue = carBrandInputRef.current?.value;
//     const CarModelInputValue = carModelInputRef.current?.value;
//     const CarBuildDateInputValue = carBuildDateInputRef.current?.value;
//     const CarPriceInputValue = carPriceInputRef.current?.value;
//     const CarFileInputFiles = carFileInputRef.current!.files;
//     let isValidCarBrandInput = false;
//     let isValidCarModelInput = false;
//     let isValidСarBuildDateInput = false;
//     let isValidCarPriceInput = false;
//     let isValidCarFileInput = false;

//     if (CarBrandInputValue?.trim().length === 0) {
//       setMessages({
//         ...messages,
//         carBrandInputMessage: 'Введите марку автомобиля',
//       });
//     } else if (/[0-9]/.test(CarBrandInputValue!)) {
//       setMessages({
//         ...messages,
//         carBrandInputMessage: 'Марка автомобиля не должна содержать цифр',
//       });
//     } else if (CarBrandInputValue!.length > 50) {
//       setMessages({
//         ...messages,
//         carBrandInputMessage: 'Марка автомобиля должна содержать менее 50 символов',
//       });
//     } else {
//       isValidCarBrandInput = true;
//       setMessages({
//         ...messages,
//         carBrandInputMessage: '',
//       });
//     }

//     if (CarModelInputValue?.trim().length === 0) {
//       setMessages({
//         ...messages,
//         carModelInputMessage: 'Введите модель автомобиля',
//       });
//     } else if (CarBrandInputValue!.length > 50) {
//       setMessages({
//         ...messages,
//         carModelInputMessage: 'Модель автомобиля должна содержать менее 50 символов',
//       });
//     } else {
//       isValidCarModelInput = true;
//       setMessages({
//         ...messages,
//         carModelInputMessage: '',
//       });
//     }

//     if (!Number(CarBuildDateInputValue!.split('-')[0])) {
//       setMessages({
//         ...messages,
//         carBuildDateInputMessage: 'Введите год производства автомобиля',
//       });
//     } else {
//       setMessages({
//         ...messages,
//         carBuildDateInputMessage: '',
//       });
//       isValidСarBuildDateInput = true;
//     }

//     if (!Number(CarPriceInputValue)) {
//       setMessages({
//         ...messages,
//         carPriceInputMessage: 'Введите цену автомобиля',
//       });
//     } else {
//       setMessages({
//         ...messages,
//         carPriceInputMessage: '',
//       });
//       isValidCarPriceInput = true;
//     }

//     if (!CarFileInputFiles![0]) {
//       setMessages({
//         ...messages,
//         carFileInputMessage: 'Выберите фото автомобиля',
//       });
//     } else {
//       setMessages({
//         ...messages,
//         carFileInputMessage: '',
//       });
//       isValidCarFileInput = true;
//     }

//     if (
//       isValidCarBrandInput &&
//       isValidCarModelInput &&
//       isValidСarBuildDateInput &&
//       isValidCarPriceInput &&
//       isValidCarFileInput
//     )
//       submitBtnRef.current!.disabled = false;
//   }

//   const addNewCard = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     console.log(111111111111);

//     const newCardData = {
//       id: `${new Date()}`,
//       brand: `${carBrandInputRef.current?.value.trim()}`,
//       model: `${carModelInputRef.current?.value.trim()}`,
//       country: `${carBuildCountrySelectRef.current?.value}`,
//       count: `${Math.random() * 10}`,
//       year: Number(carBuildDateInputRef.current?.value.split('-')[0]),
//       type: `${carTypeSelectRef.current?.value}`,
//       color: 'unknown',
//       price: Number(carPriceInputRef.current?.value),
//       electric: carIsElectricInputRef.current!.checked,
//       imageSrc: carFileInputRef.current!.files![0]
//         ? URL.createObjectURL(carFileInputRef.current!.files![0])
//         : '',
//     };
//     create(newCardData);
//   };

//   return (
//     <form className={classes.createCardForm}>
//       <MyLabel tittle={'Марка Авто'} message={messages.carBrandInputMessage}>
//         <MyInput
//           defaultValue={''}
//           // value={''}
//           onChange={checkIsValidFormValues}
//           ref={carBrandInputRef}
//           type="text"
//           placeholder="Марка"
//         />
//       </MyLabel>
//       <MyLabel tittle={'Модель'} message={messages.carModelInputMessage}>
//         <MyInput
//           defaultValue={''}
//           ref={carModelInputRef}
//           onChange={checkIsValidFormValues}
//           type="text"
//           placeholder="Модель"
//         />
//       </MyLabel>
//       <MyLabel tittle={'Тип кузова'}>
//         <MySelect
//           ref={carTypeSelectRef}
//           value={''}
//           onChange={(selectedType) => console.log(selectedType)}
//           defaultValue="Тип кузова"
//           options={[
//             { value: 'купе', name: 'купе' },
//             { value: 'кабриолет', name: 'кабриолет' },
//             { value: 'минивэн', name: 'минивэн' },
//             { value: 'кроссовер', name: 'кроссовер' },
//             { value: 'хэтчбек', name: 'хэтчбек' },
//             { value: 'седан', name: 'седан' },
//             { value: 'родстер', name: 'родстер' },
//             { value: 'внедорожник', name: 'внедорожник' },
//             { value: 'пикап', name: 'пикап' },
//             { value: 'фургон', name: 'фургон' },
//           ]}
//         ></MySelect>
//       </MyLabel>
//       <MyLabel tittle={'Страна производства'}>
//         <MySelect
//           ref={carBuildCountrySelectRef}
//           value={''}
//           onChange={(selectedType) => console.log(selectedType)}
//           defaultValue="Страна производства"
//           options={[
//             { value: 'Великобритания', name: 'Великобритания' },
//             { value: 'Испания', name: 'Испания' },
//             { value: 'Германия', name: 'Германия' },
//             { value: 'Словакия', name: 'Словакия' },
//             { value: 'Бельгия', name: 'Бельгия' },
//             { value: 'Россия', name: 'Россия' },
//             { value: 'Австрия', name: 'Австрия' },
//             { value: 'Беларусь', name: 'Беларусь' },
//             { value: 'США', name: 'США' },
//             { value: 'Италия', name: 'Италия' },
//           ]}
//         ></MySelect>
//       </MyLabel>

//       <MyLabel tittle={'Дата производства'}>
//         <MyInput
//           defaultValue={''}
//           ref={carBuildDateInputRef}
//           onChange={checkIsValidFormValues}
//           type="date"
//           required
//         />
//       </MyLabel>

//       <MyLabel tittle={'Цена'} message={messages.carPriceInputMessage}>
//         <MyInput
//           defaultValue={''}
//           ref={carPriceInputRef}
//           onChange={checkIsValidFormValues}
//           type="number"
//           required
//         />
//       </MyLabel>

//       <MyLabel tittle={'Электрокар'}>
//         <MyInput defaultValue={''} ref={carIsElectricInputRef} type="checkbox" required />
//       </MyLabel>

//       <MyLabel tittle={'загрузить файл'} message={messages.carFileInputMessage}>
//         <MyInput
//           defaultValue={''}
//           ref={carFileInputRef}
//           onChange={checkIsValidFormValues}
//           type="file"
//           accept="image/png, image/jpeg, image/jpeg"
//         />
//       </MyLabel>

//       <MyButton ref={submitBtnRef} onClick={addNewCard} disabled>
//         Создать карточку
//       </MyButton>
//     </form>
//   );
// };

// export default CreateCardForm;
