import type { ContactPayload, SubmitResult } from '@/types'

/**
 * Contact service boundary (frontend-only for now).
 *
 * Swap `MockContactService` for a real implementation when a backend is
 * available — the contact page will not need to change.
 */
export interface ContactService {
  submit(payload: ContactPayload): Promise<SubmitResult>
}

class MockContactService implements ContactService {
  submit(payload: ContactPayload): Promise<SubmitResult> {
    void payload
    return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 1200))
  }
}

export const contactService: ContactService = new MockContactService()
