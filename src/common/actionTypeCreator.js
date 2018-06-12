const divider = '__'
const beforeRequestWord = 'REQUEST'
const onSuccessWord = 'SUCCEEDED'
const onErrorWord = 'FAILED'

/*
  [INPUT] -> ENTITY, [ LIST ]
  [OUTPUT] <- ENTITY = {
      LIST: {
        REQUEST: 'ENTITY_LIST_REQUEST',
        SUCCEEDED: 'ENTITY_LIST_SUCCEEDED',
        FAILED: 'ENTITY_LIST_FAILED',
      }
    }

  Example:
  const ENTITY = cookApiConstants('ENTITY', ['LIST', 'ITEM'])
  console.log(ENTITY.LIST.REQUEST) // => 'ENTITY_LIST_REQUEST'
*/
export function cookApiConstants(entityName, rawTypes) {
  const result = {}

  const types = Array.isArray(rawTypes) ? rawTypes : [rawTypes]
  for (const type of types) {
    result[type] = cookApiStrings(entityName, type)
  }

  return result
}

export function cookCrudConstants(entityName) {
  return cookApiConstants(entityName, [
    'LIST',
    'ITEM',
    'CREATE',
    'UPDATE',
    'DELETE',
  ])
}

export default function cookConstants(entityName, types) {
  const result = {}
  for (const typeName of Object.keys(types)) {
    const nextTypes = types[typeName]
    if (nextTypes && typeof nextTypes === 'object') {
      result[typeName] = cookConstants(
        joinStrings([entityName, typeName]),
        nextTypes
      )
    } else {
      const preset = types[typeName]
      result[typeName] = cookConstantsByPreset(entityName, typeName, preset)
    }
  }

  return result
}

function cookConstantsByPreset(entityName, type, preset) {
  if (preset === 'api') {
    return cookApiStrings(entityName, type)
  } else if (!preset) {
    return cookString(entityName, type)
  }
}

function cookApiStrings(entityName, type) {
  return {
    [beforeRequestWord]: joinStrings([entityName, type, beforeRequestWord]),
    [onSuccessWord]: joinStrings([entityName, type, onSuccessWord]),
    [onErrorWord]: joinStrings([entityName, type, onErrorWord]),
  }
}

function cookString(entityName, type) {
  return joinStrings([entityName, type])
}

function joinStrings(strings) {
  return strings.join(divider)
}
