import {Field} from "formik";

const ChooseOption = ({setCategory}) => {
  return (
      <div>
        <label>
          your pet
        <Field
            type="radio"
            name="category"
            value="your pet"
            onClick={() => setCategory('your pet')}
        />
        </label>
        <label>
          sell
            <Field
                type="radio"
                name="category"
                value="sell"
                onClick={() => setCategory('sell')}
            />
        </label>    
        <label>
          lost/found
            <Field
                type="radio"
                name="category"
                value="lost/found"
                onClick={() => setCategory('lost/found')}
            />
        </label>
        <label>
          in good hands
            <Field
                type="radio"
                name="category"
                value="in good hands"
                onClick={() => setCategory('in good hands')}
            />
        </label>        
      </div>
  )
}

export default ChooseOption