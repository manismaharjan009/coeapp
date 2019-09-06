
declare interface ServiceWorkerConfig {
  onSuccess: (registration: ServiceWorkerRegistration) => void
  onUpdate: (registration: ServiceWorkerRegistration) => void
}