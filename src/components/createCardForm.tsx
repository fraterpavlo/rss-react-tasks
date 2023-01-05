import React from 'react';
import { CreateCardFormProps } from '../interfaces/components/createCardForm';
import classes from 'styles/components/create-card-form.module.css';
import { FieldValues, useForm } from 'react-hook-form';
import { TCreateCardFormPayload } from 'interfaces/utils/reducer/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'utils/reducer/reduxToolKit';
import { resetCreateCardFormValues, setCreateCardFormValues } from 'utils/reducer/reducer';

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
    dispatch(resetCreateCardFormValues());
    reset();
  };

  // const { dispatch, state } = useContext(HomePageContext)!;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState): RootState => state);

  return (
    <form className={classes.createCardForm} onSubmit={handleSubmit(onSubmit)}>
      <label>
        name:
        <input
          type="text"
          placeholder="name"
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.name?.value as string) ||
            ''
          }
          {...register('name', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  name: {
                    value: (e.target as HTMLInputElement).value,
                    error: (errors?.name?.message as string) ?? '',
                  },
                })
              ),
          })}
        />
      </label>
      <div>{errors?.name && <span>{`${errors?.name?.message}` || 'Error!'}</span>}</div>
      <label>
        gender:
        <select
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.gender
              ?.value as string) || ''
          }
          {...register('gender', {
            required: true,
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  gender: {
                    value: (e.target as HTMLSelectElement).value,
                    error: (errors?.gender?.message as string) ?? '',
                  },
                })
              ),
          })}
        >
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
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.species
              ?.value as string) || ''
          }
          {...register('species', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  species: {
                    value: (e.target as HTMLInputElement).value,
                    error: (errors?.species?.message as string) ?? '',
                  },
                })
              ),
          })}
        />
      </label>
      <div>{errors?.species && <span>{`${errors?.species?.message}` || 'Error!'}</span>}</div>
      <label>
        status:
        <select
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.status
              ?.value as string) || ''
          }
          {...register('status', {
            required: 'Important input',
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  status: {
                    value: (e.target as HTMLSelectElement).value,
                    error: (errors?.status?.message as string) ?? '',
                  },
                })
              ),
          })}
        >
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
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.origin
              ?.value as string) || ''
          }
          {...register('origin', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  origin: {
                    value: (e.target as HTMLInputElement).value,
                    error: (errors?.origin?.message as string) ?? '',
                  },
                })
              ),
          })}
        />
      </label>
      <div>{errors?.origin && <span>{`${errors?.origin?.message}` || 'Error!'}</span>}</div>
      <label>
        location:
        <input
          type="text"
          placeholder="location"
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.location
              ?.value as string) || ''
          }
          {...register('location', {
            required: 'Important input',
            maxLength: {
              value: 30,
              message: '30 letters is max length',
            },
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  location: {
                    value: (e.target as HTMLInputElement).value,
                    error: (errors?.location?.message as string) ?? '',
                  },
                })
              ),
          })}
        />
      </label>
      <div>{errors?.location && <span>{`${errors?.location?.message}` || 'Error!'}</span>}</div>
      <label>
        created:
        <input
          type="date"
          placeholder="created"
          defaultValue={
            ((state.main.createCardFormValues! as TCreateCardFormPayload)?.created
              ?.value as string) || ''
          }
          {...register('created', {
            required: true,
            onBlur: (e: Event) =>
              dispatch(
                setCreateCardFormValues({
                  created: {
                    value: (e.target as HTMLInputElement).value,
                    error: (errors?.created?.message as string) ?? '',
                  },
                })
              ),
          })}
        />
      </label>
      <div>{errors?.created && <span>{`${errors?.created?.message}` || 'Error!'}</span>}</div>
      <label>
        pick file:
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpeg"
          placeholder="image"
          {...register('image', {
            required: 'Important input',
            onBlur: (e: Event) => {
              dispatch(
                setCreateCardFormValues({
                  image: {
                    value: (e.target as HTMLInputElement).files || '',
                    error: (errors?.image?.message as string) ?? '',
                  },
                })
              );
            },
          })}
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
