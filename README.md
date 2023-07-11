This is a backend of the Flashcard assignment. You can checkout the app live [here](http://ec2-16-170-215-166.eu-north-1.compute.amazonaws.com/).

## Getting Started

First, run the development server:

```bash
npm run start:dev
```

You can access the apis via [http://localhost:3333/api](http://localhost:3333/api).

This application is build using nestjs.

## Testing

We use inbuilt testing framework provided by nestjs.
Test suites can be run as:

```bash
npm run test
```

## Deployment

The application can be deployed by running the following command.

```bash
./scripts/deploy_backend
```

This will connect to AWS ec2 instance and deploy the application via a docker image.

## Pending tasks

Due to the time constraints we are yet to setup the following.

- [ ] Strict Linting rules.
- [ ] Husky for commits hooks.
- [ ] Write detailed test cases. Both for component testing as well as e2e testing.
- [ ] Write detailed documentation of the component hierarcy and architecture.
- [ ] Refactor the code for better cognitive understanding
