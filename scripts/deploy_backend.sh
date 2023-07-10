#!/bin/bash
branch="main"

ssh -i "cli.pem" ubuntu@ec2-16-170-215-166.eu-north-1.compute.amazonaws.com -o "StrictHostKeyChecking no" -t "cd codebase/backend && git reset --hard && git fetch && git checkout $branch && git reset --hard @{u} && git pull &&  docker build -f Dockerfile.backend -t backend .  && docker stop backend || true && docker system prune -f && docker run -d --restart unless-stopped --name backend -p 3333:3333 -d backend"
