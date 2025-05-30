// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type Utm struct {
	// UTM source
	UtmSource *string `json:"utmSource,omitempty"`
	// UTM medium
	UtmMedium *string `json:"utmMedium,omitempty"`
	// UTM campaign
	UtmCampaign *string `json:"utmCampaign,omitempty"`
	// UTM term
	UtmTerm *string `json:"utmTerm,omitempty"`
}

func (o *Utm) GetUtmSource() *string {
	if o == nil {
		return nil
	}
	return o.UtmSource
}

func (o *Utm) GetUtmMedium() *string {
	if o == nil {
		return nil
	}
	return o.UtmMedium
}

func (o *Utm) GetUtmCampaign() *string {
	if o == nil {
		return nil
	}
	return o.UtmCampaign
}

func (o *Utm) GetUtmTerm() *string {
	if o == nil {
		return nil
	}
	return o.UtmTerm
}

// Attribution information for the session or current page
type Attribution struct {
	// Session referrer
	SessionReferrer *string `json:"sessionReferrer,omitempty"`
	// Session landing page
	LandingPage *string `json:"landingPage,omitempty"`
	// Referrer to the signup page
	PageBeforeConversionPage *string `json:"pageBeforeConversionPage,omitempty"`
	Utm                      *Utm    `json:"utm,omitempty"`
}

func (o *Attribution) GetSessionReferrer() *string {
	if o == nil {
		return nil
	}
	return o.SessionReferrer
}

func (o *Attribution) GetLandingPage() *string {
	if o == nil {
		return nil
	}
	return o.LandingPage
}

func (o *Attribution) GetPageBeforeConversionPage() *string {
	if o == nil {
		return nil
	}
	return o.PageBeforeConversionPage
}

func (o *Attribution) GetUtm() *Utm {
	if o == nil {
		return nil
	}
	return o.Utm
}

type CreateTeamRequestBody struct {
	// The desired slug for the Team
	Slug string `json:"slug"`
	// The desired name for the Team. It will be generated from the provided slug if nothing is provided
	Name *string `json:"name,omitempty"`
	// Attribution information for the session or current page
	Attribution *Attribution `json:"attribution,omitempty"`
}

func (o *CreateTeamRequestBody) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *CreateTeamRequestBody) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *CreateTeamRequestBody) GetAttribution() *Attribution {
	if o == nil {
		return nil
	}
	return o.Attribution
}

// CreateTeamBilling - IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
type CreateTeamBilling struct {
}

// CreateTeamResponseBody - The team was created successfully
type CreateTeamResponseBody struct {
	// Id of the created team
	ID   string `json:"id"`
	Slug string `json:"slug"`
	// IMPORTANT: If extending Billing, particularly with optional fields, make sure you also update `sync-orb-subscription-to-owner.ts` to handle the items when the object is recreated.
	Billing CreateTeamBilling `json:"billing"`
}

func (o *CreateTeamResponseBody) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *CreateTeamResponseBody) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *CreateTeamResponseBody) GetBilling() CreateTeamBilling {
	if o == nil {
		return CreateTeamBilling{}
	}
	return o.Billing
}

type CreateTeamResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The team was created successfully
	Object *CreateTeamResponseBody
}

func (o *CreateTeamResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreateTeamResponse) GetObject() *CreateTeamResponseBody {
	if o == nil {
		return nil
	}
	return o.Object
}
