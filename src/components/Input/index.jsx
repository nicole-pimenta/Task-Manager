export const Input = ({ id, label, register, ...rest }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label} </label>}
      <input id={id} {...rest} {...register} />
    </div>
  );
};
