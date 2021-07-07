import StudentModel from './student';
import ClassModel from './class';
import NotificationModel from './notification';
import ScoreModel from './score';
import ClassStudentModel from './class-student';
import UserModel from './user';
import RoleModel from './role';
import FunctionModel from './function';
import RoleFunctionModel from './role-function';
import RefreshTokenModel from './refresh-token';
import ParentInfoModel from './parent-info';

export default {
  student: StudentModel,
  class: ClassModel,
  notification: NotificationModel,
  score: ScoreModel,
  classStudent: ClassStudentModel,
  user: UserModel,
  role: RoleModel,
  function: FunctionModel,
  roleFunction: RoleFunctionModel,
  refreshToken: RefreshTokenModel,
  parentInfo: ParentInfoModel,
};
