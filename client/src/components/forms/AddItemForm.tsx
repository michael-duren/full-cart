import { useState } from 'react';
import { useStore } from '../../stores/store';
import { Category } from '../../models/grocery';
import { observer } from 'mobx-react-lite';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from './generic/Input';

interface AddItemProps {
  closeModal: () => void;
  category: Category;
}

export default observer(function AddItemForm({
  closeModal,
  category,
}: AddItemProps) {
  const {
    listStore: { createItem },
  } = useStore();
  const initialState = {
    id: '',
    name: '',
    price: '',
    category: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    price: Yup.string().required('Price is required'),
  });

  const [itemData, setItemData] = useState(initialState);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={itemData}
        onSubmit={async (values) => await createItem({ ...values, category })}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={(event) => handleSubmit(event)}>
            <div className="flex mb-8 space-y-4 items-center justify-center flex-col   mt-2 ">
              <Input name="name" type="text" placeholder="Name" label="Name" />
              <Input type="number" placeholder="0.00" name="price" />
            </div>

            <div className=" flex items-center justify-center gap-4 mt-4">
              <PrimaryButton type="submit" onClick={closeModal}>
                Add
              </PrimaryButton>
              <SecondaryButton type="button" onClick={closeModal}>
                Cancel
              </SecondaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
});
