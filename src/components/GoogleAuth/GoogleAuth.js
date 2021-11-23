import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getUserByGoogleAuth()), [dispatch]);
  return <p>Please wait...</p>;
};

export default GoogleAuth;
