const express = require('express');

const validate = require('../../middlewares/validate');
const { groupValidation } = require('../../validations');
const groupController = require('../../controllers/group.controller');

const router = express.Router();
const auth = require('../../middlewares/auth');

router.get('/getMyGroup', auth(), validate(groupValidation.getListGroup), groupController.getMyGroup);
router.get('/getUserToAdd', auth(), validate(groupValidation.getUserToAdd), groupController.getUsersToAdd);
router.post('/createChat', auth(), validate(groupValidation.member), groupController.createChat);
router.get('/getGroupById', auth(), validate(groupValidation.getGroupByID), groupController.getGroupById);
router.post('/createGroup', auth(), validate(groupValidation.createGroup), groupController.createGroup);
router.post('/changeNameGroup', auth(), validate(groupValidation.changeNameGroup), groupController.changeNameGroup);
router.delete('/deleteNameGroup', auth(), validate(groupValidation.deleteNameGroup), groupController.deleteNameGroup);
router.delete('/deleteGroup', auth(), validate(groupValidation.deleteGroup), groupController.deleteGroup);
router.post('/addMember', auth(), validate(groupValidation.addMember), groupController.addMember);
router.delete('/leaveGroup', auth(), validate(groupValidation.getGroupByID), groupController.leaveGroup);
router.delete('/deleteMember', auth(), validate(groupValidation.addMember), groupController.deleteMember);
router.get('/getWaitingGroupList', auth(), validate(groupValidation.getListWaiting), groupController.getListToAccept);
router.get('/checkMember', validate(groupValidation.groupMember), groupController.checkMember);
router.get('/searchMember', auth(), validate(groupValidation.getUserToAdd), groupController.searchMember);
router.post('/setAdminGroup', auth(), validate(groupValidation.groupMember), groupController.setAdminGroup);
router.post('/joinGroup', auth(), validate(groupValidation.waitingMember), groupController.joinGroup);
router.post('/acceptRequest', auth(), validate(groupValidation.addMember), groupController.acceptRequest);
router.delete('/cancleRequest', auth(), validate(groupValidation.addMember), groupController.cancleRequest);
router.get('/:groupId', auth(), validate(groupValidation.getGroupToJoin), groupController.getGroupLink);

module.exports = router;
