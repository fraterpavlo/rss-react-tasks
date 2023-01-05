import React from 'react';
import { CreateCardFormProps } from '../interfaces/components/createCardForm';
import classes from 'styles/components/create-card-form.module.css';
import { FieldValues, useForm } from 'react-hook-form';

const CreateCardForm = ({ create }: CreateCardFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: FieldValues) => {
    const newCardData = {
      id: +new Date(),
      name: data.name,
      gender: data.gender,
      species: data.species,
      status: data.status,
      type: '',
      origin: {
        name: data.origin,
        url: 'unknown',
      },
      location: {
        name: data.location,
        url: 'unknown',
      },
      image: data.image[0] ? URL.createObjectURL(data.image[0]) : '',
      episode: [],
      url: 'unknown',
      created: data.created,
    };

    create(newCardData);
    reset();
  };

  return (
    <form className={classes.createCardForm} onSubmit={handleSubmit(onSubmit)}>
      <label>
        name:
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
          })}
        />
      </label>
      <div>{errors?.name && <span>{`${errors?.name?.message}` || 'Error!'}</span>}</div>
      <label>
        gender:
        <select {...register('gender', { required: true })}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </label>
      <div>{errors?.gender && <span>{`${errors?.gender?.message}` || 'Error!'}</span>}</div>
      <label>
        species:
        <input
          type="text"
          placeholder="species"
          {...register('species', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
          })}
        />
      </label>
      <div>{errors?.species && <span>{`${errors?.species?.message}` || 'Error!'}</span>}</div>
      <label>
        status:
        <select {...register('status', { required: 'Important input' })}>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="unknown">unknown</option>
        </select>
      </label>
      <div>{errors?.status && <span>{`${errors?.status?.message}` || 'Error!'}</span>}</div>
      <label>
        origin:
        <input
          type="text"
          placeholder="origin"
          {...register('origin', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
          })}
        />
      </label>
      <div>{errors?.origin && <span>{`${errors?.origin?.message}` || 'Error!'}</span>}</div>
      <label>
        location:
        <input
          type="text"
          placeholder="location"
          {...register('location', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
          })}
        />
      </label>
      <div>{errors?.location && <span>{`${errors?.location?.message}` || 'Error!'}</span>}</div>
      <label>
        created:
        <input type="date" placeholder="created" {...register('created', { required: true })} />
      </label>
      <div>{errors?.created && <span>{`${errors?.created?.message}` || 'Error!'}</span>}</div>
      <label>
        pick file:
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpeg"
          placeholder="image"
          {...register('image', { required: 'Important input' })}
        />
      </label>
      <div>{errors?.image && <span>{`${errors?.image?.message}` || 'Error!'}</span>}</div>

      <button type="submit" disabled={!isValid}>
        CREATE
      </button>
    </form>
  );
};

export default CreateCardForm;
