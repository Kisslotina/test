/**
 * Populates metadata fields with the given values. Existing values will be overwritten.
 *
 * @param {Object}   metadata Metadata field
 * @param {Array}    public_ids the public IDs of the resources to update
 * @param {Function} callback Callback function
 * @param {Object}   options Configuration options
 *
 * @return {Object}
 */
exports.update_metadata = function update_metadata(metadata, public_ids, callback, options = {}) {
	return call_api("metadata", callback, options, function () {
		let params = {
			metadata,
			public_ids: utils.build_array(public_ids),
			timestamp: utils.timestamp(),
		};
		return [params];
	});
};
