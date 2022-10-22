import axios from 'axios';
import * as helper from './serviceHelpers';

const endpoint = `${helper.API_HOST_PREFIX}/api/messages`;

const add = (payload) => {
    const config = {
        method: 'POST',
        url: endpoint,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const autoAdd = (payload) => {
    const config = {
        method: 'POST',
        url: `${endpoint}/automated`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const update = (payload, id) => {
    const config = {
        method: 'PUT',
        url: endpoint + `/${id}`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const deleteById = (id) => {
    const config = {
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getByRecipientId = () => {
    const config = {
        method: 'GET',
        url: `${endpoint}/recipient`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getBySenderId = () => {
    const config = {
        method: 'GET',
        url: `${endpoint}/sender`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getConversations = (recipient) => {
    const config = {
        method: 'GET',
        url: `${endpoint}/conversation/${recipient}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const messageService = { add, autoAdd, update, deleteById, getByRecipientId, getBySenderId, getConversations };
export default messageService;
