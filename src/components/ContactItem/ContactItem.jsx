import { useDeleteContactsMutation } from 'redux/contacts/contactsOperation'; 
import { ListLi, ListBtnDelete } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const { id, name, phone } = contact;
  const [deleteContact] = useDeleteContactsMutation();

  return (
    <ListLi key={id}>
      {name} {phone}
      <ListBtnDelete onClick={() => deleteContact(id)}>Delete</ListBtnDelete>
    </ListLi>
  );
}
