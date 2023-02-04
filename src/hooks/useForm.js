import { useEffect, useMemo, useState } from "react";

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();

    // Se dispara cada vez que cambia el formSate
  }, [formState]);

  // efecto para que al cambiar de nota cambie la pantalla tambien
  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])
  


  // usamos el useMemo para memorizar el valor, solo se vuelve a procesar si cambia el
  // formValidation
  // Hay que ver cada una de las propiedades de formValidation y ver c/u sie tiene null
  // Ya con que una ono sea valida, hace que todo el form no sea valido
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      // si formValidation en la propiedad formValue (display, email, etc) es diferente de null
      // retrorna false
      if ( formValidation[formValue] !== null) return false;
    }
    // Si el form es valido
    return true
  }, [formValidation]);


  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    // el formValidations es: email, password, displayName
    for (const formField of Object.keys(formValidations)) {
      // desestructuramos lo que viene en el formValidations basado en el formField
      // se obtiene una funcion y el mensaje de error
      const [fn, errorMessage = "Este campo es requerido."] = formValidations[
        formField
      ];

      // El primer valor es el que nos interesa, con los backticks le agregamos el Valid como esta en RegisterPage
      // Explicacion ternario: se ejecunta la funcion (fn) con el valor que tenga el input
      // si la condicion de cumple es null, sino ejecuta el error message
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    // Todo esto se guardo en formCheckedValues y lo seteamos al formValidation
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    inputChange,
    onReset,

    ...formValidation,
    isFormValid
  };
};

export default useForm;
