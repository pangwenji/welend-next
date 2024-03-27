{{/*
Expand the name of the chart.
*/}}
{{- define "welend-site3.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "welend-site3.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "welend-site3.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "welend-site3.labels" -}}
helm.sh/chart: {{ include "welend-site3.chart" . }}
{{ include "welend-site3.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "welend-site3.selectorLabels" -}}
app.kubernetes.io/name: {{ include "welend-site3.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "welend-site3.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "welend-site3.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Environment Variables
*/}}
{{- define "welend-site3.envVariables" -}}
{{- range $key, $val := .Values.env.secret }}
  - name: {{ $key }}
    valueFrom:
      secretKeyRef:
        name: {{ $.Values.secretName }}
        key: {{ $key }}
{{- end}}
{{- range $key, $val := .Values.env.normal }}
  - name: {{ $key }}
    value: {{ $val }}
{{- end}}
{{- end }}
