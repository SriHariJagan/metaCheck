import type { ApplicationPayload, SubmitResult } from '@/types'

/**
 * Job application service boundary (frontend-only for now).
 *
 * Replace `MockApplicationsService` with a real implementation when the
 * backend endpoint is available — pages and modals will not change.
 */
export interface ApplicationsService {
  submit(payload: ApplicationPayload): Promise<SubmitResult>
}

class MockApplicationsService implements ApplicationsService {
  submit(payload: ApplicationPayload): Promise<SubmitResult> {
    void payload
    return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 1000))
  }
}

export const applicationsService: ApplicationsService = new MockApplicationsService()
