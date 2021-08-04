import mongoose from 'mongoose';

const scorecardSchema = mongoose.Schema({
	userId: { type: Number, required: true },
	startDate: { type: Date, required: true },
	location: { type: String, required: true },
	isFinal: { type: Boolean, required: true },
	half: { type: String, required: true, enums: ['T', 'B'] },
	inning: { type: Number, required: true },
	homeTeam: {
		type: {
			name: { type: String, required: true },
			runs: { type: Number, required: true },
			hits: { type: Number, required: true },
			errors: { type: Number, required: true },
			pitchers: {
				type: [
					{
						firstName: { type: String, required: true },
						lastName: { type: String, required: true },
						number: { type: Number, required: true },
						throws: { type: String, required: true, enums: ['L', 'R', 'S'] },
						balls: { type: Number, required: true },
						strikes: { type: Number, required: true },
						pitches: { type: Number, required: true },
						earnedRunsAllowed: { type: Number, required: true },
						runs: { type: Number, required: true },
						baseOnBalls: { type: Number, required: true },
						outs: { type: Number, required: true },
					},
				],
				required: true,
			},
			lineup: {
				type: [
					{
						battingPosition: { type: Number, required: true },
						firstName: { type: String, required: true },
						lastName: { type: String, required: true },
						number: { type: Number, required: true },
						bats: { type: String, required: true, enums: ['L', 'R', 'S'] },
						position: {
							type: String,
							required: true,
							enums: [
								'1B',
								'2B',
								'3B',
								'SS',
								'C',
								'RF',
								'CF',
								'LF',
								'SP',
								'RP',
								'DH',
							],
						},
						atBats: {
							type: [
								{
									appearanceNumber: { type: Number, required: true },
									result: { type: String, required: true },
									isHit: { type: Boolean, required: true },
									isWalk: { type: Boolean, required: true },
								},
							],
							required: true,
						},
					},
				],
				required: true,
			},
		},
		required: true,
	},
	awayTeam: {
		type: {
			name: { type: String, required: true },
			runs: { type: Number, required: true },
			hits: { type: Number, required: true },
			errors: { type: Number, required: true },
			pitchers: {
				type: [
					{
						firstName: { type: String, required: true },
						lastName: { type: String, required: true },
						number: { type: Number, required: true },
						throws: { type: String, required: true, enums: ['L', 'R', 'S'] },
						balls: { type: Number, required: true },
						strikes: { type: Number, required: true },
						pitches: { type: Number, required: true },
						earnedRunsAllowed: { type: Number, required: true },
						runs: { type: Number, required: true },
						baseOnBalls: { type: Number, required: true },
						outs: { type: Number, required: true },
					},
				],
				required: true,
			},
			lineup: {
				type: [
					{
						battingPosition: { type: Number, required: true },
						firstName: { type: String, required: true },
						lastName: { type: String, required: true },
						number: { type: Number, required: true },
						bats: { type: String, required: true, enums: ['L', 'R', 'S'] },
						position: {
							type: String,
							required: true,
							enums: [
								'1B',
								'2B',
								'3B',
								'SS',
								'C',
								'RF',
								'CF',
								'LF',
								'SP',
								'RP',
								'DH',
							],
						},
						atBats: {
							type: [
								{
									appearanceNumber: { type: Number, required: true },
									result: { type: String, required: true },
									isHit: { type: Boolean, required: true },
									isWalk: { type: Boolean, required: true },
								},
							],
							required: true,
						},
					},
				],
				required: true,
			},
		},
		required: true,
	},
});

export default mongoose.model('scorecards', scorecardSchema);
