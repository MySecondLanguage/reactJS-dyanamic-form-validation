const validator = {
    // More Detail can be found here for tutorial:
    // https://www.codementor.io/muhammedali956/implementing-dynamic-form-validators-in-reactjs-6j7q0l8e7
    ssn: {
      rules: [
        {
          test: /^[a-z0-9_]+$/,
          message: 'Username must contain only alphabets-numeric lowercase characters',
        },
        {
          test: (value) => {
            return value.length > 2;
          },
          message: 'Username must be longer than two characters',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    phone: {
        rules: [
          {
            test: /^[a-z0-9_]+$/,
            message: 'phone must contain only alphabets-numeric lowercase characters',
          },
          {
            test: (value) => {
              return value.length > 2;
            },
            message: 'phone must be longer than two characters',
          },
        ],
        errors: [],
        valid: false,
        state: '',
      },
      email: {
        rules: [
          {
            test: /^[a-z0-9_]+$/,
            message: 'email must contain only alphabets-numeric lowercase characters',
          },
          {
            test: (value) => {
              return value.length > 2;
            },
            message: 'email must be longer than two characters',
          },
        ],
        errors: [],
        valid: false,
        state: '',
      },
    password: {
      rules: [
        {
          test: (value) => {
            return value.length >= 6;
          },
          message: 'Password must not be shorter than 6 characters',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
  };
  
  export default validator;