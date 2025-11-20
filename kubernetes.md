# Kubernetes commands

# A pod is the smallest unit in kubernetes. Pod has one to one relationship with containers

# ReplicaSet: ReplicaSet helps run multiple instances of a POD in kubernetes cluster. This ensures that the number of specified pods is always running.

# Deployments: Help deploy the Pods to production also help in rolling updates and rolling back changes

# Services: Kubernetes services enable communication between serval components inside and outside the application.

# NodePort: Mapping a port on the node to a port on the pod.

# ClusterIP: Groups all pods IPs to one single interface

# kubectl run <image-name-or-any-name> --image <image-name> ------- To create a deployment

# kubectl get pods ------- to get list of pods

# kubectl describe pod <name> --------- Get more details from a pod

# kubectl describe replicaset <name> --------- Get more details from a replicaset

# kubectl describe deployment <name> --------- Get more details from a deployment

# kubectl get pods -o wide -------- Provides informations on a pod including the node

# kubectl get replicasets ------------ Used to get replicasets

# kubectl get services ------------ Used to get services

# kubectl create -f <pod-or-replicaset-name-or-deployments> --------- Used to create a pod or replicaset or deployment using yaml definitions

# kubectl replace -f <replica-set-name> ----- used to apply the updated yaml configuration

# kubectl delete replicaset <name> --- to delete a replicaset

# kubectl delete pods <name> --- to delete a pod

# kubectl get deployments ------- Used to get deployments

# kubectl get all ---- used to get objects

# kubectl rollout status deployment/<deployment-name> -------- to see the status of rollout

# kubectl rollout history deployment/<deployment-name> ---------- to see all versions and history of deployment

# kubectl apply -f <deployment-file> ---- Used to apply new configuration changes. For example image tag update. Which automatically rollout changes

# kubectl rollout undo deployment/<deployment-name> ---- used to rollback changes

# kubectl get pods,svc ------ Used to get all pods and services

# kubectl get nodes -o wide ------- Used to get the worker node ip address

