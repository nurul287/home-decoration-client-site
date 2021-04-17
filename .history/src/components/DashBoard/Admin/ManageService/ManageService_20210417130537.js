import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageService.css';
import ManageServiceTable from './ManageServiceTable/ManageServiceTable';

const ManageService = () => {
    const [modifyService, setModifyService] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5000/services")
          .then((res) => setModifyService(res.data))
          .catch((err) => console.log(err));
    }, []);
    return (
      <div>
        <ManageServiceTable services={modifyService} />
      </div>
    );
};

export default ManageService;