# Contributing Guide – DSCD Website

Welcome to the official repository of the Developer Student Club Darmstadt website. This document outlines our contribution workflow and project guidelines.

---

## Development Workflow

We follow a continuous development model without fixed sprints. Contributions are managed through issues and pull requests.

### How to Contribute

1. **Create a GitHub Issue**  
   Describe the feature, bug, or task clearly. Include any relevant context and, if possible, define acceptance criteria.

2. **Assign and Branch**  
   - Assign the issue to yourself.
   - Create a new branch based on `main`, using the format:  
     `feature/<name>` or `bugfix/<description>`

3. **Develop Locally**  
   - Follow our linting and formatting rules.
   - Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages, e.g. `feat:`, `fix:`, `docs:`.

4. **Open a Pull Request**  
   - Reference the related issue (e.g., `Closes #123`)
   - Request at least one reviewer.
   - Ensure all CI checks pass.

5. **Code Review and Merge**  
   - At least one approval is required.
   - Only reviewers merge pull requests, not the authors.
   - Pull requests are merged into `staging`.

---

## Labels and Project Board

Commonly used labels:
- `frontend`: Client-side code
- `backend`: API or server-side logic
- `infra`: Infrastructure or deployment
- `bug`: Bug reports or fixes
- `enhancement`: Feature requests or improvements
- `documentation`: Docs or README updates
- `blocked`: Waiting on other tasks

The GitHub board is used to track progress:  
**To Do → In Progress → In Review → Done**

---

## Code Quality and Testing

- Linting and format checks are enforced via GitHub Actions.
- Add unit and integration tests if applicable.
- Manually test UI and functionality before submitting a pull request.

---

## Authentication and Notifications

- Authentication is handled using Firebase.
- Email notifications are implemented using Brevo.

---

## Deployment

- The project uses Docker Compose for local and production deployment.
- Configuration secrets are managed via `.env` files and not committed to the repository.
- Preview environments are deployed from the `staging` branch.

---

Thank you for contributing to the DSC Darmstadt website.
