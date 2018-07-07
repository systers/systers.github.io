import { WorkflowStagesFormat } from './workflow-stages-format';

export const Workflow: WorkflowStagesFormat[] = [
    {
        name: 'Requirements Analysis',
        // tslint:disable-next-line:max-line-length
        details: 'Project Requirements Document -> Create Issues -> Approved by Mentor or Maintainer ->'
    },
    {
        name: 'Design',
        // tslint:disable-next-line:max-line-length
        details: 'Create Mock-Ups for the Issue -> Reviewed by Mentor or Maintainer -> Adjust Mock-Up Based on Feedback -> Approved by Mentor or Maintainer ->'
    },
    {
        name: 'Development & Testing (TDD)',
        // tslint:disable-next-line:max-line-length
        details: 'Fix the Issue -> Open a Pull Request -> Reviewed by Mentor or Maintainer -> Adjust Based on Feedback -> Approved by Mentor or Maintainer ->'
    },
    {
        name: 'Testing',
        // tslint:disable-next-line:max-line-length
        details: 'Create Issues that Test the Applications in Production (i.e. User Tests, Feature Tests, etc.) -> Reviewed by Committer -> Submit PRs that Contain Documentation on Tests to Suggest Improvements for Next Release  -> Approved by Committer ->'
    },
    {
        name: 'Maintenance',
        // tslint:disable-next-line:max-line-length
        details: 'Create Issues that Fix Errors, Improve Implementation, or Upgrade the Current Language -> Approved by Mentor, Maintainer, or Committer'
    }
];
